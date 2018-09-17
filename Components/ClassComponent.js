export default (props) =>{

    return (
    <div>
        <div id="class-container">
            <h2>Clase de {props.title}</h2>
            <ul>
                {props.studentsList.map( item => {
                    return (
                        <div className="card horizontal class-list" key={item.first_name}>
                            <div className="card-image">
                                <img src={item.photo} />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                <p>{item.first_name} {item.last_name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </ul>
        </div>
        <style jsx>
            {
                `
                    h2 {
                        color: white !important;
                    }
                    .class-list{
                        display: flex;
                    }

                    img{
                        width: 80px !important;
                        height: 80px !important; 
                    }

                    .class-list p{
                        font-size: 12px;
                        font-weight: bold;
                        margin-left: 12px;
                        width: 350px !important;
                    }
                    .class-list:hover{
                        transform:translateY(-10px)scale(1.1)translateX(10px);
                        box-shadow: 0 0 30px rgba(171, 122, 252, 1);    
                    }
                `
            }
        </style>
    </div>
)}