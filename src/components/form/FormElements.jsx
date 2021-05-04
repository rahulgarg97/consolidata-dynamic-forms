import DateInput from './elements/DateInput';
import TextInput from './elements/TextInput';
import TextAreaInput from './elements/TextAreaInput';
import NumberInput from './elements/NumberInput';
import Header from './elements/Header';

const FormElements = {}

FormElements.Number = NumberInput;
FormElements.Text = TextInput;
FormElements.TextArea = TextAreaInput;
FormElements.Date = DateInput;
FormElements.Header = Header;

export default FormElements;