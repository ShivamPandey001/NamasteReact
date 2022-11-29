import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("div",{id:"title"},[
//     React.createElement("h1",{id:"heading"}, "NamasteReact"),
//     React.createElement("h2",{}, "From zero to Hero"),
//     React.createElement("h3",{}, "in 3 months"),
// ]);

// const noOfMonths =3;
// const heading = (
//     <div>
//         <h1>Namaste React</h1>
//         <h2>from zero to Hero!</h2>
//         <h3>in {noOfMonths} months</h3>
//     </div>
// );
const TitleComponent = () => <h1> Namaste React Bootcamp</h1>

const HeadingComponent = () => {
    return (
            <div id="title" className='=title-class'>
                <TitleComponent />
                <h2>from zero to Hero!</h2>
                <h3>in 3 months</h3>
            </div>
        );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);