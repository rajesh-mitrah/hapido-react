import { Form } from 'antd';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

const { Item: FormItem } = Form;

// Toolbar Options Configuration
const modules = {
  toolbar: [
    // Headers
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    // Font styling and alignment
    ['bold', 'italic', 'underline', 'strike'],
    [{ align: [] }],

    // Text and background color
    [{ color: [] }, { background: [] }],

    // Font family
    [{ font: [] }],

    // Font size
    [{ size: ['small', false, 'large', 'huge'] }],

    // Script size
    ['script', 'sub'], // superscript/subscript
    // Block formatting
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    [{ indent: '-1' }, { indent: '+1' }],

    ['link', 'image', 'video', 'formula'],

    // Horizontal rule and clear formatting
    ['hr', 'clean']
  ]
};

const Editor = ({ label = '', name = '', value = '', onChange = () => {}, style = { height: '300px' } }) => {
  return (
    <FormItem label={label} name={name}>
      <ReactQuill value={value} onChange={onChange} modules={modules} style={style} />
    </FormItem>
  );
};

export default Editor;
