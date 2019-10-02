import { Card, Icon } from 'semantic-ui-react';
import 'isomorphic-fetch';
//import Plato from "./plato";
//import 'semantic-ui-css/semantic.min.css';

export default class extends React.Component {
    static async getInitialProps() {
        let req = await fetch('https://api.audioboom.com/channels/recommended');
        let {body: channels} = await req.json();
        return { channels };
    }

    extra = (
        <p>
            <Icon name='money'/>
            5000
        </p>
    );
    render(){
        const { channels } = this.props;

        return <div>
            {channels.map((channel) => (
            <Card
                image={channel.urls.logo_image.original}
                header={channel.title}
                meta={channel.type}
                description={channel.description}
                extra={this.extra}/>
        ))}
        </div>
    }
}