import React from 'react'
import {Input , Upload, Button, Icon, Select, message} from 'antd'




/////////////////////////-v-v-traer desde newPostContainer-v-v-///////////////////////////////
const newPostDisplay = ({handleselect2, onChange, handleselect, onChangeFile, newPost}) => {


  const Option = Select.Option;
/*
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
*/
  const { TextArea } = Input;

const props = {
  name: 'file',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


  return(
<div>
    <form onSubmit={newPost} style={{width:600, margin:"0 auto", padding:"20"}}>

<h2 style={{paddingTop:"200px"}}>Informacion del post</h2>
<p>
  <Input 
  name="title"
    title="title"
    type="text"
    onChange={onChange}
  // value={signup.username}
    placeholder="Title" 
  />
</p>

  
<p>
  <Upload {...props}  onChange={onChangeFile}>
      <Button>
        <Icon type="upload" /> Upload Image
      </Button>
  </Upload>
</p>


<p>
  <TextArea onChange={onChange} rows={4} name="description" placeholder="Description"/>
</p>



 <p>
  <Select name="animalType" style={{ width: 120 }} defaultValue="Dog" onChange={handleselect} >
    <Option value="Dog">Dog</Option>
    <Option value="Cat">Cat</Option>
    <Option value="Bird">Bird</Option>
    <Option value="Reptile">Reptile</Option>
    <Option value="Rodent">Rodent</Option>
    <Option value="Fish">Fish</Option>
    <Option value="Other">Other</Option>
  </Select>
</p>

<p>
  <Select name="animalSize" style={{ width: 120 }} defaultValue="Medium" onChange={handleselect2} >
    <Option value="Small">Small</Option>
    <Option value="Medium">Medium</Option>
    <Option value="Big">Big</Option>
  </Select>
</p>

<p>
  <Input 
  name="address"
    address="address"
    type="text"
    onChange={onChange}
  // value={signup.username}
    placeholder="Address" 
  />
</p>

<p>
  <Input 
  name="phoneNumber"
    phonenumber="phonenumber"
    type="text"
    onChange={onChange}
  // value={signup.username}
    placeholder="Phone Number" 
  />
</p>

<p>
  <Input 
    name="email"
    email="email"
    type="text"
    onChange={onChange}
  // value={signup.username}
    placeholder="email" 
  />
</p>


<Input id="submit" type="submit" />




</form>
    </div>
  )
}

export default newPostDisplay