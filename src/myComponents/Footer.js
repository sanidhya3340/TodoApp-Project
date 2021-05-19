import React from 'react'

export const Footer = () => {
    const footerStyle = {
        position: "relative",
        top: "70vh",
        width: "100%" 
    }
        return(
        <footer className = "bg-dark text-light p-2 pb-0" style = { footerStyle } >
                <p className="text-center" >Copyright &copy; MyTodosList.com</p>
        </footer >
    ) 
}
