import {useState} from "react";
import axios from "axios";

function Reflection() {

    const [reflechion, setReflechion] = useState("");
    const [rating, setRating] = useState(1);
    const [bookName, setBookName] = useState("");

    const onSubmit = function () {
        if (reflechion == "") {
            alert("please input your reflection!");
            return;
        }
        if (bookName == "") {
            alert("please input your favorite!");
            return;
        }
        axios.post("http://localhost:8080/api/reflechionAndrating/submit",
            {reflechion,rating,bookName})
            .then(response => {
                alert("success");
                //Reset input data
                setReflechion("");
                setRating(1);
                setBookName("");
            })
            .catch(() => {
                alert("fail");
                }
            );
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
              <h3>Book description</h3>

                  <br />
                  <input type="hidden" name="id" value="1" />
                  <label>Reflection：</label>
                  <textarea
                    name="reflection"
                    class="form-control"
                    placeholder="give your reflection"
                    value={reflechion}
                    onChange={event => setReflechion(event.target.value)}>
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
                    placeholder="give your favorite"
                    value={bookName}
                    onChange={event => setBookName(event.target.value)}>

                  </textarea>
                  <br />
                <button onClick={onSubmit}>Submit</button>

            </div>
            <div class="span4"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Reflection;