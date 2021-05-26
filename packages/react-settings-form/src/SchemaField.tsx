import { createSchemaField } from '@formily/react'
import {
  FormItem,
  Input,
  NumberPicker,
  DatePicker,
  TimePicker,
  Select,
  Radio,
  Switch,
  Space,
  ArrayItems,
  ArrayTable,
  FormCollapse,
  FormGrid,
  FormLayout,
  FormTab,
} from '@formily/antd'
import {
  SizeInput,
  ColorInput,
  ImageInput,
  BackgroundImageInput,
  PositionInput,
  CornerInput,
  ValueInput,
  BoxStyleSetter,
} from './components'

export const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    ValueInput,
    SizeInput,
    ColorInput,
    ImageInput,
    PositionInput,
    CornerInput,
    BackgroundImageInput,
    BoxStyleSetter,
    NumberPicker,
    DatePicker,
    TimePicker,
    Select,
    Radio,
    Switch,
    Space,
    ArrayItems,
    ArrayTable,
    FormCollapse,
    FormGrid,
    FormLayout,
    FormTab,
  },
})