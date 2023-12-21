import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function CardBasico({nome}) {
  return (
    <Card sx={{ minWidth: 80, minHeight:150 }}>
      <CardContent>
        <span>{nome}</span>
      </CardContent>
      
    </Card>
  );
}