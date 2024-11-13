
import './App.css'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HookForm from './components/HookForm/HookForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefullForm from './components/StatefullForm/StatefullForm'

function App() {
 
  const handleSignUpSumbit = data => {
    console.log('sign up data:' , data)
   
}

  const handleUpdateProfile = data => {
    console.log('Update profile data:' , data)
  }


  return (
    <>
      
      <h1> Form Master</h1>
      
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm 
      formTitle = {'Login form'} 
      handleSubmit = {handleSignUpSumbit}
      >
        <div>
          <h2>This is SignUp form</h2>
          <p>
            You can do signup form here
          </p>
        </div>

      </ReuseableForm>



      <ReuseableForm 
      formTitle = {'Update Profile'} 
      handleSubmit = {handleUpdateProfile}
       submitBtnText = {'Update Profile'}
       >
        
        <div>
            <h2>Update form secrtiopn is here</h2>
            <p>
              You can update your profile froin herew
            </p>
        </div>

       </ReuseableForm>

    </>
  )
}

export default App
