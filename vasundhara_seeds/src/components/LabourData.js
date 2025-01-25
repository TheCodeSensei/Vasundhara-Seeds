import React, { useEffect, useSyncExternalStore } from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import '../styles.css'


export default function LabourData(){
    const [farmers, setFarmers] = useState([]);
    const [farmerName, setFarmerName] = useState([]);
    const [activity, setActivity] = useState([]);
    const [activities, setActivities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState('');
    const [selectedFarmer, setSelectedFarmer]=useState('');
    const [rate, setRate]=useState('');
    const [varieties, setVarieties]=useState([]);
    const [variety, setVariety]=useState('');
    const [selectedVariety, setSelectedVariety]=useState('');


    useEffect(()=>{

        const fetchlabourData=async()=>{

            try{
                // Fetching farmers and activities concurrently using Promise.all
                const [responseFarmers, responseActivities, responseVarieties] = await Promise.all([
                axios.get('http://localhost:3000/farmers'),
                axios.get('http://localhost:3000/activity'),
                axios.get('http://localhost:3000/variety')

      ]);
                setFarmers(responseFarmers.data);
                setActivities(responseActivities.data);
                setVarieties(responseVarieties.data);
            }
            catch(error){
                console.log('error fetching data',error);
            }
        };
        fetchlabourData();
    },[]);
    
    const handleSubmitFarmer=async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/farmers',{farmer_name:farmerName});
            setFarmerName('');
        } catch(error){
            console.log(error)
        };


    };
    const handleSubmitVariety=async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/variety',{variety_name:variety});
            setFarmerName('');
        } catch(error){
            console.log(error)
        };


    };

    const handleSubmitActivity=async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/activity',{activity_name:activity, rate:rate});
            setActivity('');
        } catch(error){
            console.log(error)
        };


    };

    const handleFarmerChange=(e) =>{
        setSelectedFarmer(e.target.value);
        console.log('Selected Farmer', e.target.value);
    };
    

    const handleActivityChange=(e) =>{
        const activity = e.target.value;
        // const rate = e.target.element.rate.value;
        // console.log(activity, rate);
        setSelectedActivity(activity);
        console.log(activity);
        // setRate(rate);
        // console.log('Selected Activity and Rate', activity, rate);
    };

    const handleVarietyChange=(e) =>{
        setSelectedVariety(e.target.value);
        console.log('Selected Farmer', e.target.value);
    };
    


    return(
        <div>
        <div>
            <Navbar/>
            <img src ={process.env.PUBLIC_URL + "/pngegg.png"} style = {{width:'150px', display:'block', margin :'0 auto'}}/>
        </div>

        <div className='div'>
        {/* Select Farmer */}
            <label className='label' htmlFor="farmerDropdown">Select a Farmer:</label>
      <select className='select'
        id="farmerDropdown"
        value={selectedFarmer}
        onChange={handleFarmerChange}
      >
        <option className='option' value="" disabled>
          Select a Farmer
        </option>
        {farmers.map((farmer) => (
          <option key={farmer._id} value={farmer._id}>
            {farmer.farmer_name}
          </option>
        ))}
      </select>

      {selectedFarmer && (
        <p className='p'>
          You selected: <strong>{farmers.find(f => f._id === selectedFarmer)?.farmer_name}</strong>
        </p>
      )}
<br></br>

      {/* Select Activity */}
                  <label className='label' htmlFor="activityDropdown">Select Activity:</label>
      <select className='select'
        id="activityDropdown"
        value={selectedActivity}
        onChange={handleActivityChange}
      >
        <option className='option' value="" disabled>
          Select Activity
        </option>
        {activities.map((activity) => (
          <option className='option' key={activity._id} value={activity._id}>
            {activity.activity_name}
          </option>
        ))}
      </select>
      {selectedActivity && (
        <p className='p'>
          You selected: <strong>{activities.find(f => f._id === selectedActivity)?.activity_name}</strong><br></br>
          Rate: <strong>{activities.find(f => f._id === selectedActivity)?.rate}</strong>
        </p>
      )}
<br></br>

        {/* Select Variety */}
        <label className='label' htmlFor="VarietyDropdown">Select a Variety:</label>
      <select className='select'
        id="VarietyDropdown"
        value={selectedVariety}
        onChange={handleVarietyChange}
      >
        <option className='option' value="" disabled>
          Select a Variety
        </option>
        {varieties.map((variety) => (
          <option key={variety._id} value={variety._id}>
            {variety.variety_name}
          </option>
        ))}
      </select>

      {selectedVariety && (
        <p className='p'>
          You selected: <strong>{varieties.find(f => f._id === selectedVariety)?.variety_name}</strong>
        </p>
      )}
<br></br>

            {/* Add new Farmer */}
            <form className='form' onSubmit={handleSubmitFarmer}>
                <input className='input' type = 'text' value = {farmerName} onChange={(e)=>setFarmerName(e.target.value)} placeholder="Add New Farmer" required>
                </input>
                <button className='button' type="submit">Add New Farmer</button>

            </form>

            {/* Add new Activity */}
            <form className='form' onSubmit={handleSubmitActivity}>
                <input className='input' name ='activity' type = 'text' value = {activity} onChange={(e)=>setActivity(e.target.value)} placeholder="Add New Activity" required>
                </input>
                <input className='input' name = 'rate' type = 'text' value = {rate} onChange={(e)=>setRate(e.target.value)} placeholder="Add Rate" required>
                </input>
                <button className='button' type="submit">Add Activity and Rate</button>
            </form>
            
        {/* Add new Variety */}
        <form className='form' onSubmit={handleSubmitVariety}>
                <input className='input' type = 'text' value = {variety} onChange={(e)=>setVariety(e.target.value)} placeholder="Add New Variety" required>
                </input>
                <button className='button' type="submit">Add New Variety</button>

            </form>
        </div>
        </div>
    );



};
