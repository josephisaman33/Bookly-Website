### Reference: https://www.kaggle.com/code/fahadmehfoooz/book-recommendation-system 
### (remember to add to google sheet sources)
### MUST INSTALL PACKAGES !!!!!!!!
# python -m pip install numpy
# python -m pip install pandas
# python -m pip install scipy


import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
from scipy.sparse.linalg import svds


book_df = pd.read_csv('./Books.csv')
ratings_df = pd.read_csv('./Ratings.csv').sample(40000)
user_df = pd.read_csv('./Users.csv')
user_rating_df = ratings_df.merge(user_df, left_on = 'User-ID', right_on = 'User-ID')


# Collaborative Filtering 
book_user_rating = book_df.merge(user_rating_df, left_on = 'ISBN',right_on = 'ISBN')
book_user_rating = book_user_rating[['ISBN', 'Book-Title', 'Book-Author', 'User-ID', 'Book-Rating']]
book_user_rating.reset_index(drop=True, inplace = True)


d ={}
for i,j in enumerate(book_user_rating.ISBN.unique()):
    d[j] =i
book_user_rating['unique_id_book'] = book_user_rating['ISBN'].map(d)


users_books_pivot_matrix_df = book_user_rating.pivot(index='User-ID', 
                                                          columns='unique_id_book', 
                                                          values='Book-Rating').fillna(0)


users_books_pivot_matrix_df = users_books_pivot_matrix_df.values






NUMBER_OF_FACTORS_MF = 15

#Performs matrix factorization of the original user item matrix
U, sigma, Vt = svds(users_books_pivot_matrix_df, k = NUMBER_OF_FACTORS_MF)

sigma = np.diag(sigma)

all_user_predicted_ratings = np.dot(np.dot(U, sigma), Vt) 



def top_cosine_similarity(data, book_id, top_n=10):
    index = book_id 
    book_row = data[index, :]
    magnitude = np.sqrt(np.einsum('ij, ij -> i', data, data))
    similarity = np.dot(book_row, data.T) / (magnitude[index] * magnitude)
    sort_indexes = np.argsort(-similarity)
    return sort_indexes[:top_n]

def similar_books(book_user_rating, book_id, top_indexes):
    print('Recommendations for {0}: \n'.format(
    book_user_rating[book_user_rating.unique_id_book == book_id]['Book-Title'].values[0]))
    for id in top_indexes + 1:
        print(book_user_rating[book_user_rating.unique_id_book == id]['Book-Title'].values[0])



k = 50
movie_id =25954 # Will be changed to ISBN  
top_n = 3
sliced = Vt.T[:, :k] # representative data

print()
similar_books(book_user_rating, 25954, top_cosine_similarity(sliced, movie_id, top_n))