import React from 'react';

export function HeaderImg({title, subTitle}) {
    return (
        <section>
            {/* <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`, */}
            <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1506719040632-7d586470c936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1610&q=80)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: .9,
                backgroundSize: 'cover'}}>

                <div className="container" style={{minHeight: '550px'}}>
                    <div className="text-center justify-content-center align-self-center">
                        <h1 className="pt-5 pb-3">{title}</h1>
                        <h5>{subTitle}</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}
