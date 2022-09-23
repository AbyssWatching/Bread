const React = require("react")
const bread = require("../models/bread")
const Default = require("./layouts/Default")

function Index({breads}){

    return(
        <Default>
            <h2>
                Index Page
            </h2>

            <div className="newButton">
                <a href="/breads/new"><button>Add a new button</button></a>
            </div>
            {/*
          <p> I Have {breads[0].name} bread!
            */}
            <ul>
                {
                    breads.map((bread, index) => {
                        return(
                        <li key={index}>
                            <a href={`/breads/${index}`}>
                            {bread.name}
                            </a>
                        </li>)
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index

