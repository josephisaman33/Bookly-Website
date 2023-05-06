import {useState} from "react";
import axios from "axios";

function Reflection() {

    const [reflection, setReflection] = useState("");
    const [rating, setRating] = useState(1);
    const [bookName, setBookName] = useState("");
    const [ratingAvg, setRatingAvg] = useState(null);

    const onSubmit = function () {
        if (reflection == "") {
            alert("please input your reflection!");
            return;
        }
        if (bookName == "") {
            alert("please input your favorite!");
            return;
        }
        axios.post("http://localhost:8080/api/reflectionAndrating/submit",
            {reflection,rating,bookName})
            .then(response => {
                alert("success");
                axios.post("http://localhost:8080/api/reflectionAndrating/getRatingAvg",
                    bookName, {
                        headers: {
                            "Content-Type": "text/plain"
                        }
                    })
                    .then(response => {
                        setRatingAvg(response.data);
                    })
                    .catch(() => {
                            alert("fail");
                        }
                    );
            })
            .catch(() => {
                alert("fail");
                }
            );
    }

    function ReSubmit() {
        setReflection("");
        setRating(1);
        setBookName("");
        setRatingAvg(null);
    }

    return (
      <div>
        <div>
          <h1>Bookly Reflection and Ratings</h1>
        </div>
  
        <div class="container-fluid">
          <div class="row-fluid">
            <div class="span4"></div>
            <div class="span4">
              <h2></h2>

                {ratingAvg == null ?
                <div>
                    <h3>Book description</h3>
                  <br />
                  <input type="hidden" name="id" value="1" />
                  <label>Reflection：</label>
                  <textarea
                    name="reflection"
                    class="form-control"
                    placeholder="give your reflection"
                    value={reflection}
                    onChange={event => setReflection(event.target.value)}>
                  </textarea>
                  <label>Rating：</label>
                  <select name="stars" class="form-control"
                          value={rating}
                          onChange={event => setRating(event.target.value)}>
                    <option value="1">☆</option>
                    <option value="2">☆☆</option>
                    <option value="3">☆☆☆</option>
                    <option value="4">☆☆☆☆</option>
                    <option value="5">☆☆☆☆☆</option>
                  </select>
                  <label>Which one book did you read？</label>
                  <textarea
                    name="name"
                    class="form-control"
                    placeholder="give your book"
                    value={bookName}
                    onChange={event => setBookName(event.target.value)}>

                  </textarea>
                  <br />
                <button onClick={onSubmit}>Submit</button>
                </div>
                    :
                <div>
                    <br/><br/><br/><br/><br/>
                    <h2>BookName：{bookName}</h2><br/>
                    <div style={{fontSize: 30}}>
                    Average rating:&nbsp;&nbsp;<span style={{color: "red", fontSize: 50}}>{ratingAvg}</span>
                        <br/><br/><br/>
                    </div>
                    <button onClick={ReSubmit}>ReSubmit</button>
                </div>
                }

            </div>
            <div class="span4"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Reflection;