export function Breadcrumbs() {
  // get current page from either useHistory or props params url
  const location = window.location.href.replace('http://localhost:3000/', '')

  return (
    <div className="row justify-content-center" style={{height: 90}}>
      <div className="col-lg-9 col-sm-12">
        <span style={{color: '#404C55', fontWeight: 'bold'}}>
          {location.charAt(0).toUpperCase() + location.slice(1)}
        </span>
      </div>
    </div>
  )
}