import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import hexToRgba from 'hex-to-rgba';



export default function CardBasico({nome,key:id, cor, foto}) {
  const style = {
    cardContent: {
      textAlign:'center', 
      fontFamily:"'Pokemon Solid', sans-serif;", 
      fontWeight:"bold",
      display:"flex",
      flexDirection:"column",
      gap:"4px"
    },
    imgStyle: {width:"80px"}

  }
  return (
    <Card key={id} sx={{ minWidth: 80, minHeight:150, backgroundColor:hexToRgba(cor,'0.4'),color:cor}}>
      <CardContent sx={style.cardContent}>
        <span>{nome}</span>
        <img src={foto} alt="" style={style.imgStyle}/>
      </CardContent>
      
    </Card>
  );
}