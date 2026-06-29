import React from 'react'

const Icons = ({ icon, className, pathName }) => {
    const icons = {

        line: (
            <svg className={className} width="189" height="8" viewBox="0 0 189 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" width="188" height="8" fill="#01C8FF" />
                <rect width="166" height="8" fill="#2C49FE" />
            </svg>


        ),
    }

    return [icons[icon]];
}

export default Icons