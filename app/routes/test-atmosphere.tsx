import { Button, Badge, Card, CardHeader, CardBody, CardFooter, SearchField } from 'atmosphere';
import 'atmosphere/style.css';


export default function TestAtmosphere() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Atmosphere Library Test</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg mb-2">Buttons</h2>
          <Button variant="filled" color="accent" onPress={() => {console.log('button pressed')}}>New Button</Button>
          <Button variant="outlined" color="primary" >New Button</Button>
        </div>
        
        <div>
          <h2 className="text-lg mb-2">Badges</h2>
          <div className='w-50 px-2 py-2 m-5'>
            <Badge icon="circle-check" label="Approved" size="md" variant='informative' />
            <Badge variant='positive' icon='circle-plus' label="Another Badge" />
          </div>
        </div>
        
       
          <h2 className="text-lg mb-2">Card</h2>
          <Card>
            <CardHeader>
              <div className='flex w-full items-center justify-between'>
                <h2 className="font-['Inter'] text-3xl leading-10 font-light">Header H2</h2>
                <div className='w-64'>
                  <SearchField placeholder='Search this card' />
                </div>
              </div>
            </CardHeader>
            <CardBody>
             Card content
            </CardBody>
            <CardFooter>
              <div className='text-base font-normal'>Footer Content</div>
            </CardFooter>
          </Card>
      </div>
    </div>
  );
}