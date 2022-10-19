import React from "react"

// function reveal_punchline(){
//     // console.log("Working")
//     const ans = document.querySelectorAll("#pl");
//     for (let i = 0; i < ans.length; i++){
//         ans[i].hidden = false;
//         console.log(ans[i])
//     }
// }

// export default function Jokes(prop){
//     if (!(prop.setup)){
//         return <p>{prop.punchline}</p>
//     }
//     return (
//         <ol>
//             <li onClick = {reveal_punchline}>{prop.setup}</li>
//             <li hidden = {true} id = "pl">{prop.punchline}</li>
//             <hr />
//         </ol>
//     );
// }

export default function Jokes(props){
    const [isShown, getIsShown] = React.useState(false);

    function toggle(){
        getIsShown( prevVal => !prevVal )
    }

    const shown = isShown ? "Hide" : "Show";

    return(
        <section>
            {props.setup && <h3>{props.setup}</h3>}
            {/* <p hidden = {isShown}>{props.punchline}</p> */}
            {isShown && <p>{props.punchline}</p>}
            <button onClick = {toggle}> {shown} Punchline</button> 
            <hr />
        </section>
    )
}