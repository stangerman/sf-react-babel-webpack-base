//import FormContainer from "./js/components/container/FormContainer";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css';
import AccordionExample from './AccordionExample';
import Icon from '@salesforce/design-system-react/components/icon';
import Datepicker from '@salesforce/design-system-react/components/date-picker';
import Dropdown from '@salesforce/design-system-react/components/menu-dropdown'; 
import Avatar from '@salesforce/design-system-react/components/Avatar'; 



// ExpressJS example
// app.use('/assets/icons', express.static('node_modules/@salesforce-ux/design-system/assets/icons/'));

class App extends Component {
    render() {
        return (
            <React.Fragment>
            <AccordionExample />
            						<Icon
							assistiveText={{ label: 'Account' }}
							category="standard"
							name="account"
							size="small"
						/>

<Datepicker
					onChange={(event, data) => {
						if (this.props.action) {
							const dataAsArray = Object.keys(data).map((key) => data[key]);
							this.props.action('onChange')(event, data, ...dataAsArray);
						} else if (console) {
							console.log('onChange', event, data);
						}
					}}
					onCalendarFocus={(event, data) => {
						if (this.props.action) {
							const dataAsArray = Object.keys(data).map((key) => data[key]);
							this.props.action('onCalendarFocus')(event, data, ...dataAsArray);
						} else if (console) {
							console.log('onCalendarFocus', event, data);
						}
					}}
				/>


<Dropdown
					assistiveText={{ icon: 'More Options' }}
					iconCategory="utility"
					iconName="down"
					iconVariant="border-filled"
					onSelect={(value) => {
						console.log('selected: ', value);
					}}
					options={[
						{ label: 'Menu Item One', value: 'A0' },
						{ label: 'Menu Item Two', value: 'B0' },
						{ label: 'Menu Item Three', value: 'C0' },
						{ type: 'divider' },
						{ label: 'Menu Item Four', value: 'D0' },
					]}
				/>

<Avatar
					assistiveText={{ icon: 'Avatar image' }}
					imgSrc="https://lightningdesignsystem.com/assets/images/avatar2.jpg"
					imgAlt="Person Name"
				/>
                        </React.Fragment>

        );
    }
}

export default App;
// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(
    // <IconSettings iconPath='/dist'>
    <IconSettings iconPath="public/css/lds/icons">
      <App />
    </IconSettings>,
    document.getElementById('root')
  )
