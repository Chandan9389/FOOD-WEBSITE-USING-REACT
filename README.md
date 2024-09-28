# React + Vite

the link :  https://food-website-using-react-by-chandan.vercel.app/
host by vercel

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


 const [phone, setPhone] = useState()


  const api = 'http://localhost:1337/api/manage-buyers';


  useEffect(() => {
  
    axios.get(api)
    .then((res)=>{
      console.log(res)
      setPhone(res.data.data)
      
    })
  
  
  }, [])





  under return   

  <div>
    
      {phone && phone.map((item, index) => (<div className=""  key={index} >
        <p> {/* Display each phone name and email in a paragraph */}
          {item.name} - {item.email} {/* Combine name and email in one paragraph */}
        </p>
        </div> ))}
  
  </div>
