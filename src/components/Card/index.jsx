import {
  Card, 
  CardHeader,
  CardActions
} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import hexToRgba from 'hex-to-rgba';



export default function CardPokemon({nome,key:id, cor, foto, tipo}) {
  const style = {
    cardHeader: {
      textAlign:'center', 
      fontFamily:"'Pokemon Solid', sans-serif;", 
      fontWeight:"bold",
      display:"flex",
      flexDirection:"column",
      gap:4
    },
    imgStyle: {
      maxWidth:"100%",
      marginLeft:"2rem"
    },

  }
  return (
    <Card key={id} sx={{ minWidth: "6rem",height: "15rem", backgroundColor:hexToRgba(cor,'0.25'),color:cor}}>
      <CardHeader
        title={nome}
        titleTypographyProps={style.cardHeader}
      />
      <CardContent
        sx={{
          display:'grid',
          gap:10,
          gridTemplateColumns:"2fr 1fr",
          placeItems:"center end",
          padding:0
        }}
      >
        <img src={foto} alt="" style={style.imgStyle}/>
        <span style={{
          //border:`1px solid ${cor}`,
          background:hexToRgba(cor, '0.4'),
          color:"white",
          borderRadius:12,
          marginRight:"1rem",
          padding:"4px 8px",
          gridColumn:"3/4"
        }}>{tipo}</span>
      </CardContent>
      
    </Card>
  );
}