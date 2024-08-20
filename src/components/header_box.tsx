import React from 'react'

const HeadBox = (
    {
        type = 'title',
        title,
        subtext,
        user
    }: HeaderBoxProps
) => {
    return (
        <header className='header-box'>
            <h1 className='header-box-title'>
                {title}
                {type === 'greeting' ? `, ${user}` : ''}
            </h1>
            <p className='header-box-subtext'
            >{subtext}</p>
        </header>
    )
}

export default HeadBox
