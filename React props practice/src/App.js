import React from "react"
import Jokes from "./components/Jokes"

export default function App(){
    return (
    <div>
        <Jokes setup = "What did the chicken say to the rooster? " punchline = "Hello you Cuck" />
        <Jokes setup = "Why did the chicken cross the road? " punchline = "To get to the other side" />
        <Jokes punchline = "Imagine rickrolling Rick Atstely himself" />
        <Jokes setup = "Knock Knock? " punchline = "I don't want any girl scout cookies" />
    </div>
    )
}