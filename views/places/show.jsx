const React = require('react')
const Def = require('../default')

function show (data) {
    let comments=(
        <h3 classname="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
          stars += '⭐'
        }
        rating = (
          <h3>
            {stars} 
          </h3>
        )
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! 😡 ' : 'Rave! 😸'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    }
  return(
    <Def>
        <main>
            <div classname="row">
                <div classname="col-em-6">
                    <img src={data.place.pic} alt={data.place.name}/>
                    <h3>
                        Located in {data.place.city},{data.place.state}
                    </h3>
                </div>
                <div classname="col-sm-6">
                    <h1> {data.place.name}</h1>
                    <h2>Rating</h2>
                        <p>Not rated</p>
                    <h2>Descrption</h2>
                    <h3>{data.place.showEstablished()}</h3>
                    <h4>Serving {data.place.cruisines}</h4>
                    <a href ={`/places/${data.place.id}/edit`} classname="btn btn-warning">
                        Edit
                    </a>
                    <form method="Post" action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="submit" classname="btn btn-danger">
                        Delete
                    </button>
                    </form>
                </div>
            </div>
            <h2>Comments</h2>
                {comments}
                <h2>Got you own rant or rave?</h2>
                <form method="POST" action={`${data.place.id}/comment`}>
                  <div className='form-group'>
                    <label htmlFor='content'>Content</label>
                    <input classname='form-control' id='content' name='content'/>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='author'>Author</label>
                    <input classname='form-control' id='author' name='cauthorontent'/>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='stars'>Star rating</label>
                    <input className='form-control' type="number" id='stars' name='stars' min={0.5} max={5} />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='content'>Rant?</label>
                    <input classname='form-control' type="checkbox"  id='rant' name='rant' value={true}/>
                  </div>
                  <input className='btn btn-primary' type="submit" value="add coment"/>
                </form>
        </main>
    </Def>
  );                 
    
  
module.exports = show

