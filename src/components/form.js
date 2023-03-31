import React, { useState, useEffect } from 'react'
import Select from 'react-select'

export default function Form() {

    let option = [
        { value: 'HTML', label: "HTML" },
        { value: 'CSS', label: "CSS" },
        { value: 'JS', label: "JS" },
        { value: 'REACT', label: "REACT" },
        { value: 'JAVA', label: "JAVA" },
        { value: 'C/C++', label: "C/C++" }
    ]

    const [arr, setArr] = useState([]);

    const [active, setActive] = useState(true)

    const [message, setMessage] = useState(
        "Try it free 7 days then 180/mo. thereafter"
    )

    const [formValue, setFormValue] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )

    function handleChange(e) {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    useEffect(() => {
        if (formValue.name && isValidEmail(formValue.email) && formValue.password.length >= 6 && arr.length > 0) {
            setActive(false)
        }
        else setActive(true)

    }, [formValue, arr])

    function handleSkill(e) {
        let value = e.value;
        if (value && !arr.includes(value)) {
            setArr([...arr, value])
        }
    }

    function handleRemoveSkill(skillToRemove) {
        setArr((prevSkills) =>
            prevSkills.filter((skill) => skill !== skillToRemove)
        )
    }

    function buttonClick() {
        setMessage("You have successfully subscribed to our plan ✔")
        setFormValue({
            name: "",
            email: "",
            password: "",
        })
        setActive(true);
        setArr([])
        setTimeout(() => {
            setMessage("Try it free 7 days then 180/mo. thereafter")
        }, 2000);

    }

    return (

        <div className="dynamic">
            <div className='message'>
                <p>{message}</p>
            </div>
            <form className='form-s'>

                <input
                    name='name'
                    type="text"
                    placeholder='Name'
                    onChange={handleChange}
                    value={formValue.name}
                />
                <input
                    name='email'
                    type="email"
                    placeholder='Email Address (example@ggmail.com)'
                    onChange={handleChange}
                    value={formValue.email}
                />
                <input
                    name='password'
                    type="password"
                    placeholder='Password (min 6 characters)'
                    onChange={handleChange}
                    value={formValue.password}
                />

                <div className='select'>
                    <Select
                        className='select-s'
                        placeholder={<div className="select-placeholder-text">Choose your skills</div>}
                        options={option}
                        onChange={handleSkill}
                        isOptionDisabled={(option) => option.isdisabled}
                    />
                </div>

                <div className='skill'>
                    {
                        arr.map((i) => {
                            return (
                                <div className='skill-s'>
                                    {i}
                                    <span onClick={() => handleRemoveSkill(i)}>X</span>
                                </div>
                            )
                        })
                    }
                </div>

                <button disabled={active} onClick={buttonClick} type="button">CLAIM YOUR FREE TRIAL</button>

                <div className="txt">By clicking the button you are agreeing to our <span>Terms and Services</span></div>
            </form>

        </div>
    )
}
