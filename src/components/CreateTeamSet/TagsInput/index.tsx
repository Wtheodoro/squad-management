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
    if (event.target.value !== '') {
      const tagReplaced = event.target.value
      setTags([...tags, tagReplaced])
      selectedTags([...tags, tagReplaced])

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
        onKeyUp={event => event.key === "Enter" && addTag(event)}
      />
    </Container>
  )
}

export default TagsInput;