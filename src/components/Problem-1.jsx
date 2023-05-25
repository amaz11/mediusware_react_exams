import React, {useEffect, useState} from 'react';

const Problem1 = () => {
    const [data, setData] = useState([])
    const [getInput,setGetInput]= useState({
        name:"",
        status:""
    })
    const [show, setShow] = useState('all');


    const handleClick = (val) =>{
        setShow(val);
    }

    const handalePost = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setGetInput({ ...getInput, [name]: value });
      };
    const postSubmit = (e)=>{
        e.preventDefault();
        const newData = [...data,getInput]
        setData(newData)
    }
    const filteredData = show === "all" ? data : data.filter(item => item.status.toLowerCase()=== show.toLowerCase());
    const sortedData = filteredData.sort((a, b) => {
        if (a.status === "active" && b.status === "complete") {
          return -1; // "active" before "complete"
        } else if (a.status === "complete" && b.status === "active") {
          return 1; // "complete" after "active"
        } else {
          return 0; // Maintain the existing order
        }
      });
    useEffect(() => {
        const sortedData = data.sort((a, b) => {
            if (a.status === "active" && b.status === "complete") {
              return -1; // "active" before "complete"
            } else if (a.status === "complete" && b.status === "active") {
              return 1; // "complete" after "active"
            } else {
              return 0; // Maintain the existing order
            }
          });
          setData(sortedData);
    }, [data]);
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={postSubmit}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name='name' onChange={handalePost} value={getInput.name}/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name='status' onChange={handalePost} value={getInput.status}/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {sortedData.map(({name,status},index)=><tr key={index}>
                                    <td>{name}</td> 
                                <td>{status}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;