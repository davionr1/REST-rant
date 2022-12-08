const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <label htmlFor='founded'>Founded</label>
                <input classname="form-control" id="founded" name="founded" value={data.place.founded}/>
                <div className="form-group">
                <label htmlFor="name">Place Name</label>
                <input 
                    className="form-control" 
                    id="name" 
                    name="name" 
                      value={data.place.name} 
                required />
                </div>
                <div className="form-group">
                <label htmlFor="pic">Place Picture</label>
                <input 
                  className="form-control"
                  id="pic"
                  name="pic"
                  defaultValue={data.place.pic} 
                 />
                </div>
                <div className="form-group">
                <label htmlFor="city">City</label>
                <input 
                  className="form-control"
                  id="city"
                  name="city"
                  defaultValue={data.place.city} 
                required />
                </div>
                <div className="form-group">
                <label htmlFor="State">State</label>
                <input 
                  className="form-control"
                  id="state"
                  name="state"
                  defaultValue={data.place.state} 
                required />
                </div>
                <div className="form-group">
                <label htmlFor="cruisines">Cruisine</label>
                <input 
                  className="form-control"
                  id="cruisine"
                  name="cruisine"
                  defaultValue={data.place.cruisines} 
                 />
                </div>
                <input className="btn btn-primary" type="submit" value="Update Place" />
            </form>

          </main>
        
        </Def>
    )
}

module.exports = edit_form
