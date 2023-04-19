function Reflection() {
    return(
        <div>
            <h1>Bookly Reflection and Ratings</h1>
        </div>
        
<div class="container-fluid">
    <div class="row-fluid">
        <div class="span4">
        </div>
        <div class="span4">
             <h2><h2>
             <h3>Book description</h3>
            <form action="/app1/reviews/" method="post">
                <fieldset>
                    <br/>
                    <input type="hidden" name="id" value="1"/>
                    <label>Reflection：</label>
                    <textarea name="reflection" class="form-control" placeholder="give your reflection"></textarea>
                    <label>Rating：</label>
                    <select name="stars" class="form-control">
                        <option value="1">☆</option>
                        <option value="2">☆☆</option>
                        <option value="3">☆☆☆</option>
                        <option value="4">☆☆☆☆</option>
                        <option value="5">☆☆☆☆☆</option>
                    </select>
                      <label>Which one book did you read？</label>
                    <textarea name="name" class="form-control" placeholder="give your favorite"></textarea>
                    <br>
                    <input type="submit" value="Submit">
                </fieldset>
                {%csrf_token%}
            </form>
        </div>
        <div class="span4">
        </div>
    </div>
</div>

    )
}

export default Reflection;
