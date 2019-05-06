import * as enzyme from 'enzyme';
//@ts-ignore
import * as Adapter from 'enzyme-adapter-react-16';

// tslint:disable-next-line:no-any
(enzyme as any).configure({ adapter: new Adapter() });
