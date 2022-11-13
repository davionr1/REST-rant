const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src ="https://media.cnn.com/api/v1/images/stellar/prod/201030094143-stock-rhodesian-ridgeback.jpg?q=x_2,y_181,h_1228,w_2182,c_crop/h_720,w_1280" alt="cat-pic"/>
          </main>
      </Def>
    )
  }
  

module.exports = error404
