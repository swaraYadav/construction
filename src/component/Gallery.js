import Project from "./Project";
import Projectitem from "./Projectitem";
const projectname=[
{
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5Q_DwPGqm56ORJtN096SNxRoGfZl_6GyAw&usqp=CAU",
    name :"project1"

},
  {
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCog6ymORPkDdworRJi0R_fMicxKA-8GlZ3g&usqp=CAU" ,  
    name:"project2"
  },
 {
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bCXDwh8-IKFX9IBpFltx9nFckJOTAOy0lQ&usqp=CAU",
  name:"project3"
  },
  {
    imageUrl:"https://ugc.futurelearn.com/uploads/images/ce/43/header_ce431033-a678-4d5f-971f-6eb72417cb51.jpg",
    name :"project4"

},
{
  imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHWHx8xYRbkcJJxeDVXMQwgjumJentJ2cLag&usqp=CAU",
  name :"project5"

},
{
  imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgb9ltziD9eqz42j9NRshoR6K0EujLMCxqoA&usqp=CAU",
  name :"project6"

},
{
  imageUrl:"https://www.constructconnect.com/hubfs/Imported_Blog_Media/projmgt-e1473358613687.jpg",
  name :"project7"

},
{
  imageUrl:"https://img.squareyards.com/secondaryPortal/637976534885983407-0109220624482448.jpeg",
  name :"project8"

},
{
  imageUrl:"https://www.constructconnect.com/hubfs/Imported_Blog_Media/projmgt-e1473358613687.jpg",
  name :"project9"

},


 {
    imageUrl:"https://ugc.futurelearn.com/uploads/images/ce/43/header_ce431033-a678-4d5f-971f-6eb72417cb51.jpg",
  name:"project10"
  },
  {
    imageUrl:"https://www.dahuasecurity.com/asset/upload/uploads/image/20201009/-2.jpg" ,  
    name:"project11"
  },
 {
    imageUrl:"https://5.imimg.com/data5/SELLER/Default/2021/4/AM/QW/UU/7090057/building-construction-services-500x500.jpg",
  name:"project12"
  }
]
function Gallery(){
    return(
      <>
      <h1 className="projectgallery">Construction Gallery</h1>
        <div className="projectlist">
            {projectname.map((item) => {
                return (
                  <>
                    <Projectitem {...item} />
                    </>
                )
            })
            }
        </div>
        </>
  )
}
export default Gallery;