import { Registry, withRegistry, useComponentRegistry } from '@bem-react/di'

const registry = new Registry({ id: 'my-reg'})
registry.set('Button', (props) => <button {...props} />)

const Index = () => {
    const { Button } = useComponentRegistry('my-reg')
    return(
        <div>
            <h1>Hello World</h1>
            <Button type='link'>Hello!</Button>
        </div>
    )
}

export default withRegistry(registry)(Index)
