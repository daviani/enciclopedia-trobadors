import { MemoryRouter } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../App';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Bands from '../pages/Bands';
import Discographies from '../pages/Discographies';
import Labels from '../pages/Labels';
import Band from '../pages/Band';
import Discography from '../pages/Discography';
import Label from '../pages/Label';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
	it('should see Homa pages', function () {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/']}>
				<App />
			</MemoryRouter>,
		);

		expect(wrapper.find(Home)).toHaveLength(1);
		expect(wrapper.find(NotFound)).toHaveLength(0);
	});

	it('Should see bands', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/bands']}>
				<App />
			</MemoryRouter>,
		);

		expect(wrapper.find(Bands)).toHaveLength(1);
	});

	it('Should see one band', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/band/fa470851-80d9-4514-b57f-76055961e651']}>
				<App />
			</MemoryRouter>,
		);

		expect(wrapper.find(Band)).toHaveLength(1);
	});

	it('Should see discographies', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/discographies']}>
				<App />
			</MemoryRouter>,
		);

		expect(wrapper.find(Discographies)).toHaveLength(1);
	});

	it('Should see one discography', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/discography/6bd2ded9-1e9d-401c-8b9b-fb5a4fce5d46']}>
				<App />
			</MemoryRouter>,
		);

		expect(wrapper.find(Discography)).toHaveLength(1);
	});

	it('Should see labels', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/labels']}>
				<App />
			</MemoryRouter>,
		);

		expect(wrapper.find(Labels)).toHaveLength(1);
	});

	it('Should see one label', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/label/d697fd95-6507-4126-97e7-bf4830b03bee']}>
				<App />
			</MemoryRouter>,
		);

		expect(wrapper.find(Label)).toHaveLength(1);
	});

	it('invalid path should redirect to 404', function () {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/random']}>
				<App />
			</MemoryRouter>,
		);

		expect(wrapper.find(Home)).toHaveLength(0);
		expect(wrapper.find(NotFound)).toHaveLength(1);
	});
});
