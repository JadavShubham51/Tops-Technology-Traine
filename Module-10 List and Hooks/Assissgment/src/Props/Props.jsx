import React from 'react'
import Header from '../Layout/Comomon_componet/Header'
import Footer from '../Layout/Comomon_componet/Footer'
import Class_Props from './Class_Props'
import Func_Props from './Func_Props'

function Props() {
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className="row">
               <div className="col">
               <Func_Props title="Gap" desc="Regular Fit Polo " img="https://assets.ajio.com/medias/sys_master/root/20230513/IT84/645fd57042f9e729d783402d/-473Wx593H-441777742-green-MODEL3.jpg" />
                
               </div>
               <div className='col'>
                <Func_Props title="Men" desc="Regulaer T-shits " img="https://th.bing.com/th/id/OIP.ajzgyucYixlSOJ04IwdnPgHaJ4?rs=1&pid=ImgDetMain" />
                </div>
                <div className='col'>
                <Func_Props title="Gap" desc="Regular Fit" img="https://assets.ajio.com/medias/sys_master/root/20230203/7BwT/63dce33ff997dd708e36da5a/-473Wx593H-441777867-blue-MODEL.jpg" />
                </div>
                <div className="col">
                <Func_Props title="Gap" desc="Striped Standard  Shirt" img="https://assets.ajio.com/medias/sys_master/root/20230502/rqZx/6450e7dfd55b7d0c638e6450/-473Wx593H-441777923-ltgreen-MODEL4.jpg" />
                </div>
                <hr />
                <div className="col">
                <Class_Props title="Gap" desc="High-Rise Logo Print Regular Fit Shorts" img="https://assets.ajio.com/medias/sys_master/root/20230601/rJfp/6478cbe3d55b7d0c63317e48/-473Wx593H-442029622-purple-MODEL4.jpg" />
                </div>
                <div className="col">
                <Class_Props title="Gap" desc="Striped Crew-Neck T-Shirt" img="https://assets.ajio.com/medias/sys_master/root/20230808/q97L/64d25894eebac147fcb48f20/-473Wx593H-442110725-black-MODEL8.jpg" />
                </div>
                <div className="col"><Class_Props title="Gap" desc="Mid-Wash Low-Rise Denim Shorts" img="https://assets.ajio.com/medias/sys_master/root/20230808/COlA/64d26890eebac147fcb4eb62/-473Wx593H-442110611-mediumblue-MODEL6.jpg" /></div>


            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Props
