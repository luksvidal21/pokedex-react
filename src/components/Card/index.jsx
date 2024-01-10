import {
  Card, 
  CardHeader,
  Chip 
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
      gap:"4px"
    },
    imgStyle: {width:"80px"},
    cardContent: {
      display:'flex',
      flexDirection:'flex-start',
      justifyContent:'space-evenly'
    }

  }
  return (
    <Card key={id} sx={{ minWidth: 80, minHeight:150, backgroundColor:hexToRgba(cor,'0.45'),color:cor}}>
      <CardHeader
        title={nome}
        titleTypographyProps={style.cardHeader}
      />
      <CardContent
        sx={style.cardContent}
      >
        <img src={foto} alt="" style={style.imgStyle}/>
        <Chip 
          label={tipo}
        />
      </CardContent>
      
    </Card>
  );
}