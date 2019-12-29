import React from 'react'

export default function ClearFormButton({clearFormHandle}) {
    return (
        <div>
            <button onClick={clearFormHandle} class="accent-button">Clear/Reset Form</button>
        </div>
    )
}
