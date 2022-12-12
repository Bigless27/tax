import React from 'react'


type Props = {
    handleChange: (e: React.ChangeEvent) => void
}

const search = (props: Props) => {
    const { handleChange } = props;

    return (
        <input placeholder='Search' onChange={(e) => handleChange(e)
        } />
    )
}

export default search