import { useState } from 'react';
import { Button, Badge, Card, CardHeader, CardBody, CardFooter, SearchField, QuietSelect, PhoneField, RangeCalendar } from '@nwsconnect/atmosphere';
import '@nwsconnect/atmosphere/style.css';


export default function TestAtmosphere() {
  const [country, setCountry] = useState('us');
  const [value, setValue] = useState('');
  const [selectedKey, setSelectedKey] = useState('');
  const [dateRange, setDateRange] = useState(null);
  
    const handleSelectionChange = (key) => {
      setSelectedKey(key);
      console.log('Selected Key:', key);
    };

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
          <div className='w-40 px-2 py-2 m-5'>
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
             <QuietSelect 
                selectedKey={selectedKey} 
                placeholder='Option' 
                onSelectionChange={(selectedKey) => handleSelectionChange(selectedKey)}
                items={[{ id: 'Option 1', name: 'Option 1' }, { id: 'Option 2', name: 'Option 2' }]} 
              />
              <div className="w-80">
                <PhoneField
                label='Phone number'
                country={country}
                onlyCountries={['us', 'gb', 'ca', 'mx', 'au']}
                value={value}
                onCountryChange={setCountry}
                onChange={(e) => setValue(e.target.value)}
              />
              </div>
              <RangeCalendar
                aria-label="Select date range"
                value={dateRange}
                onChange={setDateRange}
              />
            </CardBody>
            <CardFooter>
              <div className='text-base font-normal'>Footer Content</div>
            </CardFooter>
          </Card>
      </div>
    </div>
  );
}