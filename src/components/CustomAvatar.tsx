import React from 'react';

function CustomAvatar({ name }: { name: string }) {
    // Function to generate a random background color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Get the first letter of the name
    const firstLetter = name ? name.charAt(0).toUpperCase() : '';

    // Style for the Avatar
    const avatarStyle = {
        backgroundColor: getRandomColor(),
        color: 'white',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
    };

    return (
        <div style={avatarStyle}>
            {firstLetter}
        </div>
    );
}

export default CustomAvatar;
