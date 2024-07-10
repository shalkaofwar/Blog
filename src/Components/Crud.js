import React, {useState} from "react";

const Crud = () => {
const[FormData, setFormData] = useState(
{   
    Id:1,
    ComicName: "",
    Genre: "",
    Price:"",
    ReleaseDate:"",
});
const[Flag, setFlag] = useState(-1);

    const [data, setData] = useState([]);

    const { Id, ComicName, Genre,Price, ReleaseDate} = FormData;

    const HandleChanges = (e) => {
        // console.log(e.target.name);
        setFormData({...FormData, [e.target.name]:e.target.value});
    }

    const submissionHandler = (e) => {
        e.preventDefault();
        if(ComicName && Genre && Price && ReleaseDate){
        setData([...data,FormData]);
        console.log(Flag);
        var z = Id;
        if(Flag>=Id){
            z = Flag;
            setFlag(Flag+1);
        }
       
        setFormData({
            Id: z+1,
            ComicName: "",
            Genre: "",
            Price:"",
            ReleaseDate:""});
            console.log(data);
        } }

    const deleteHandler = (index) => {
        const newdata = data.filter((item, i) => i!==index);
        setData(newdata);
    }

    const updateHandler = (index) =>{
        const item = data[index];
        if(Flag<data.length){
        setFlag(data.length);}
        setFormData(item);
        deleteHandler(index);
    }
return(
<div style={{minHeight:"53vh"}}>
    <br></br>
   <center><h3>Form Stuff</h3></center> 
    <form className="form-inline" onSubmit={submissionHandler}>
    <div className="form-group row" style={{width:"100%"}}>

        <div className="col-sm-3">
        <div className="form-group row">
        <label htmlFor="ComicName" className="col-xs-3 control-label">Comic Name</label>
        <input type="text" onChange={HandleChanges} className="form-control" name="ComicName" id="ComicName" placeholder="Enter" value={ComicName}/>
        </div>
        </div>

        <div className="col-sm-2">
        <div className="form-group row">
        <label htmlFor="Genre" className="col-xs-3 control-label">Genre</label>
        <input type="text" onChange={HandleChanges} className="form-control" name="Genre" id="Genre" placeholder="Enter" value={Genre}/>
        </div>
        </div>

        <div className="col-sm-2">
        <div className="form-group row">
        <label htmlFor="Price">Price</label>
        <input type="text" onChange={HandleChanges} className="form-control" name="Price" id="Price" placeholder="Enter" value={Price}/>
        </div>
        </div>

        <div className="col-sm-2">
        <div className="form-group row">
        <label htmlFor="ReleaseDate">Release</label>
        <input type="date" onChange={HandleChanges} className="form-control" name="ReleaseDate" id="ReleaseDate" placeholder="Enter" value={ReleaseDate}/>
        </div>
        </div>


        <div className="col-sm-3">
        <div className="form-group row">
        <label style={{visibility: "hidden"}}>Submit</label>
        <button type="submit" className="btn btn-primary form-control">Submit</button>
        </div>
        </div>

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
<td>{item.Id}</td>
<td>{item.ComicName}</td>
<td>{item.Genre}</td>
<td>{item.Price}</td>
<td>{item.ReleaseDate}</td>
<td>
<button className="btn btn-warning" onClick={() => updateHandler(index)}> Edit</button>{" "}
<button className="btn btn-danger" onClick={() => deleteHandler(index)}>Delete</button>
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