import { useState } from 'react';

import { Container } from './styles';

interface TagsInputProps {
  selectedTags: any
  predefinedTags: string[]
}

const TagsInput = (props: TagsInputProps) => {
  const {selectedTags, predefinedTags} = props
  const [tags, setTags] = useState<string[]>(predefinedTags)


  const addTag = (event: any) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value])
      selectedTags([...tags, event.target.value])
      event.target.value = ""
    }
  }

  const removeTag = (indexToRemove: number) => {
    setTags([...tags.filter((tag, index) => index !== indexToRemove)])
  }

  return (
    <Container>
      <ul id="tags">
        {
          tags?.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span className="tag-close"
                onClick={() => removeTag(index)}
              >x</span>

            </li>
          ))
        }
      </ul>
      <input type="text"
        placeholder="Press enter to add"
        onKeyUp={event => event.key === "Shift" && addTag(event)}
      />
    </Container>
  )
}

export default TagsInput;