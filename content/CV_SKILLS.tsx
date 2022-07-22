const techFE = `JavaScript, TypeScript, React, Vue, HTML, CSS, SASS, LESS, Webpack, Grunt, Ant Design, UmiJS, NextJS`
const techBE = `NodeJS, Express, Koa, Python, Django, PostgreSQL, MongoDB, AWS`
const techDV = `CytoscapeJS, Apache ECharts, Plotly, Matplotlib`
const software = `Photoshop, AdobeXD, AutoCAD, SketchUp`

const CV_SKILLS = {
  ul_EN: (
    <ul>
      <li style={{ marginBottom: '10px' }}>
        <b>F/E</b>: {techFE} <i>& other JS libraries and frameworks</i>
      </li>
      <li style={{ marginBottom: '10px' }}>
        <b>B/E</b>: {techBE}
      </li>
      <li style={{ marginBottom: '10px' }}>
        <b>DataVisualisation</b>: {techDV}
      </li>
      <li>
        <b>Software</b>: {software}
      </li>
    </ul>
  ),
  ul_ZH: (
    <ul>
      <li>
        <b>前端:</b> {techFE} <i>及很多其他未列出的 JS 库和框架</i>
      </li>
      <li>
        <b>后端:</b> {techBE}
      </li>
      <li>
        <b>数据可视化:</b> {techDV}
      </li>
      <li>
        <b>软件</b>: {software}
      </li>
    </ul>
  ),
} as const

export default CV_SKILLS
