
import Count from './Count'


const Counter = ({onIncrement,onDecrment,count} ) => {
  return (
    <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5
         bg-white rounded shadow'>
            <Count count={count} />
        <div className='flex space-x-3 '>
            <button onClick={onIncrement} className='bg-blue-900 text-white p-3 rounded-sm'>Increment</button>
            <button onClick={onDecrment} className='bg-red-900 text-white p-3 rounded-sm'>Decrement</button>
        </div>
    </div>
  )
}

export default Counter