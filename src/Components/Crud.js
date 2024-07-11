import React, {useEffect, useState} from "react";
import axios from "axios";
const Crud = () => {
const[FormData, setFormData] = useState(
{   id:0,
    name: "",
    genreId: 0,
    genre: "",
    price:0,
    releaseDate: "",
});
const[Flag, setFlag] = useState(false);
const[UpdateID, setUpdateID] =useState(-1);

    const [data, setData] = useState([]);
    // eslint-disable-next-line
    const {id, name, genreId,price, releaseDate} = FormData;

    const HandleChanges = (e) => {
        setFormData({...FormData, [e.target.name]:e.target.value});
    }

    const submissionHandler = (e) => {
        e.preventDefault();

        if(name && genreId && price && releaseDate){

            axios({
                method: 'post',
                url: 'http://willowdale.runasp.net/heroes',
                data: FormData,
                headers: {'Content-Type': 'application/json' }
            })
            .then(function (response) {
                console.log(response);

                setData([...data,response.data]); // Concatenate new data
                setFormData({
                    name: "",
                    genreId: "",
                    price:"",
                    releaseDate:""});
                    console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            });


        } }

    const cancelHander = () =>{
        setFlag(false);
        setFormData({
            name: "",
            genreId: "",
            price:"",
            releaseDate:""});
            console.log(data);

            setUpdateID(-1);
    }

    const deleteHandler = (deleteID) => {
        axios.delete(`http://willowdale.runasp.net/heroes/${deleteID}`)
        .then(res=> {setFormData(res.data)})
        .catch(error=>console.log(error));
    }

    const updateHandler = (editID) =>{
        axios.get(`http://willowdale.runasp.net/heroes/${editID}`)
        .then(res=> {setFormData(res.data)})
        .catch(error=>console.log(error));

        setFlag(true);
        setUpdateID(editID);

    }

    const updateButtonHandler = (Update) =>{
        axios.put(`http://willowdale.runasp.net/heroes/${Update}`,FormData)
        .then(res=> {setFormData({
            name: "",
            genreId: "",
            price:"",
            releaseDate:""})})
        .catch(error=>console.log(error));

        setFlag(false);

    }

    useEffect(()=> {
        axios.get("http://willowdale.runasp.net/heroes")
        .then(res=>setData(res.data))
        .catch(error=>console.log(error))
    })

return(
<div style={{minHeight:"53vh"}}>
    <br></br>
   <center><h3>Form Stuff</h3></center> 
    <form className="form-inline" onSubmit={submissionHandler}>
    <div className="form-group row" style={{width:"100%"}}>

        <div className="col-sm-2">
        <div className="form-group row">
        <label htmlFor="name" className="col-xs-3 control-label">Comic Name</label>
        <input type="text" onChange={HandleChanges} className="form-control" name="name" id="name" placeholder="Enter" value={name}/>
        </div>
        </div>

        <div className="col-sm-2">
        <div className="form-group row">
        <label htmlFor="genreId" className="col-xs-3 control-label">GenreId</label>
        <input type="number" onChange={HandleChanges} className="form-control" name="genreId" id="genreId" placeholder="Enter" value={genreId}/>
        </div>
        </div>

        <div className="col-sm-2">
        <div className="form-group row">
        <label htmlFor="price">Price</label>
        <input type="number" onChange={HandleChanges} className="form-control" name="price" id="price" placeholder="Enter" value={price}/>
        </div>
        </div>

        <div className="col-sm-2">
        <div className="form-group row">
        <label htmlFor="releaseDate">Release</label>
        <input type="date" onChange={HandleChanges} className="form-control" name="releaseDate" id="releaseDate" placeholder="Enter" value={releaseDate}/>
        </div>
        </div>

        {Flag? "" : (
        <div className="col-sm-2">
        <div className="form-group row">
        <label style={{visibility: "hidden"}}>Submit</label>
        <button type="submit" className="btn btn-primary form-control">Submit</button>
        </div>
        </div>)}

        {Flag? (
        <div className="col-sm-2">
        <div className="form-group row">
        <label style={{visibility: "hidden"}}>Update</label>
        <button onClick={() => updateButtonHandler(UpdateID)} className="btn btn-primary form-control">Update</button>
        </div>
        </div>) : "" }

        {Flag? (
        <div className="col-sm-2">
        <div className="form-group row">
        <label style={{visibility: "hidden"}}>Cancel</label>
        <button onClick={cancelHander} className="btn btn-primary form-control">Cancel</button>
        </div>
        </div>) : "" }

        </div>
        </form>

        <div className="row" style={{visibility: "hidden"}}>Space</div>
        <div className="row">
<h3> <center>Comic Book Details</center></h3></div><br></br>

<table className="table table-striped">
<thead>
<tr>
<th>ID</th>
<th>Comic Name</th>
<th>Genre</th>
<th>Price</th>
<th>Release Date</th>
<th></th>
</tr>
</thead>
<tbody>
{data.map((item,index)=>(
<tr key={index}>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.genre}</td>
<td>{item.price}</td>
<td>{item.releaseDate}</td>
<td>
{Flag ? (<button className="btn btn-warning" style={{visibility:"hidden"}}>Edit</button>) : (<button className="btn btn-warning" onClick={() => updateHandler(item.id)}>Edit</button>) }
{" "}
{Flag ? (<button className="btn btn-danger" style={{visibility:"hidden"}}>Delete</button>) : (<button className="btn btn-danger" onClick={() => deleteHandler(item.id)}>Delete</button>) }
</td>
</tr>
))

}
</tbody>

</table>

</div>




);
};

export default Crud;