import React from 'react';

function FormComponent(props) {
    return (
        <main>
            <form>
                <input 
                    name='firstName' 
                    value={props.data.firstName} 
                    onChange={props.handleChange} 
                    placeholder='First Name' 
                />
                <br />
                <input 
                    name='lastName' 
                    value={props.data.lastName} 
                    onChange={props.handleChange} 
                    placeholder='Last Name' /
                >
                <br />
                <input 
                    name='age' 
                    value={props.data.age} 
                    onChange={props.handleChange} 
                    placeholder='Age' 
                />
                <br />

                {/* Create radio button for gender here */}
                <label>
                    <input 
                        type='radio' 
                        name='gender'
                        value='male'
                        checked={props.data.gender === 'male'}
                        onChange={props.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type='radio' 
                        name='gender'
                        value='female'
                        checked={props.data.gender === 'female'}
                        onChange={props.handleChange}
                    /> Female
                </label>
                <br />

                {/* Create select box for location here */}
                <select 
                    value={props.data.destination}
                    name='destination' 
                    onChange={props.handleChange}
                >
                    <option value=''>-- Please Choose a destination --</option>
                    <option value='germany'>Germany</option>
                    <option value='norway'>Norway</option>
                    <option value='north pole'>North Pole</option>
                    <option value='south pole'>South Pole</option>
                </select>

                <br />

                {/* Create check boxes for dietary restrictions here */}
                <label>
                    <input 
                        type='checkbox'
                        name='isVegan'
                        onChange={props.handleChange}
                        checked={props.data.isVegan}
                    /> Vegan?
                </label>
                <br />
                <label>
                    <input 
                        type='checkbox'
                        name='isKosher'
                        onChange={props.handleChange}
                        checked={props.data.isKosher}
                    /> Kosher?
                </label>
                <br />
                <label>
                    <input 
                        type='checkbox'
                        name='isLactoseFree'
                        onChange={props.handleChange}
                        checked={props.data.isLactoseFree}
                    /> Lactose Free?
                </label>
                <br />

                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>
                Your dietary restrictions: <br/>
                Vegan: {props.data.isVegan ? 'Yes' : 'No'} <br />
                Kosher: {props.data.isKosher ? 'Yes' : 'No'} <br />
                Lactose Free: {props.data.isLactoseFree ? 'Yes' : 'No'}

            </p>
        </main>
    )
}

export default FormComponent;