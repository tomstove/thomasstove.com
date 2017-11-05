import Meta from './meta'

export default ({ children }) => (
  <div>
    <Meta />
    <div className="container">
      { children }
    </div>
  </div>
)
