import { Button, Badge, Card } from 'atmosphere';
import 'atmosphere/dist/atmosphere.css';


export default function TestAtmosphere() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Atmosphere Library Test</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg mb-2">Buttons</h2>
          <Button variant="filled" color="accent" onPress={() => {console.log('button pressed')}}>Accent Button</Button>
          <Button variant="outlined" color="primary" className="ml-2">Primary Button</Button>
        </div>
        
        <div>
          <h2 className="text-lg mb-2">Badges</h2>
          <Badge icon="circle-check" label="Approved" size="md" variant='informative'>Default Badge</Badge>
          <Badge className="ml-2">Another Badge</Badge>
        </div>
        
        <div>
          <h2 className="text-lg mb-2">Card</h2>
          <Card className="p-4 max-w-sm">
            <h3>Test Card</h3>
            <p>This is a test card from the atmosphere library.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}