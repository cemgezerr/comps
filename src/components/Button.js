import React from 'react'
import classNames from 'classnames'

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) => { // ... rest ile eventler aktarıldı rest.className ile className özellikleri aktarıldı
    const classes = classNames(rest.className, 'flex items-center px-3 py-1.5  border', {
        'bg-blue-500  border-blue-500 text-white':primary,
        'bg-gray-900  border-gray-900 text-white':secondary,
        'bg-green-500  border-green-500 text-white':success,
        'bg-yellow-400  border-yellow-400 text-white':warning,
        'bg-red-500  border-red-500 text-white':danger,
        'rounded-full' : rounded,
        'bg-white':outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,
         
    })

    return (
        <button {...rest} className={classes}>{children}</button>
    )
}
Button.propTypes = {
    checkVariationValue: ({ primary, success, secondary, warning, danger }) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!success) + Number(!!danger)
        if (count > 1) {
            return new Error('tek bir tane prop giriniz')
        }
    }
}

export default Button