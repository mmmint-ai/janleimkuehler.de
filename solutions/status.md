---
title: Solution Status
subtitle: >-
  Overview of available solutions, links, documentation and status
solutions:
  - name: Registration Recognition
    description: >-
      This is a description
    dev_docs: https://dev.api.mmmint.ai/fahrzeugschein/v1/docs
    dev_health: https://dev.api.mmmint.ai/fahrzeugschein/v1/health
    prod_docs: https://api.mmmint.ai/fahrzeugschein/v1/docs
    prod_health: https://api.mmmint.ai/fahrzeugschein/v1/health
  - name: AInonymizer
    description: >-
      This is a description
    dev_docs: https://dev.api.mmmint.ai/ainonymizer/v1/docs
    dev_health: https://dev.api.mmmint.ai/ainonymizer/v1/health
    prod_docs: https://api.mmmint.ai/ainonymizer/v1/docs
    prod_health: https://api.mmmint.ai/ainonymizer/v1/health
  - name: Numberplate Recognition
    description: >-
      This is a description
    dev_docs: https://dev.api.mmmint.ai/numberplate/v1/docs
    dev_health: https://dev.api.mmmint.ai/numberplate/v1/health
    prod_docs: https://api.mmmint.ai/numberplate/v1/docs
    prod_health: https://api.mmmint.ai/numberplate/v1/health
  - name: Face Recognition
    description: >-
      This is a description
    dev_docs: https://dev.api.mmmint.ai/face/v1/docs
    dev_health: https://dev.api.mmmint.ai/face/v1/health
    prod_docs: https://api.mmmint.ai/face/v1/docs
    prod_health: https://api.mmmint.ai/face/v1/health
  - name: mr fiktiv
    description: >-
      This is a description
    dev_docs: https://dev.api.mrfiktiv.com/v1/docs/
    dev_health: https://dev.api.mrfiktiv.com/v1/health
    prod_docs: https://api.mrfiktiv.com/v1/docs/
    prod_health: https://api.mrfiktiv.com/v1/health
layout: page
---

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

<table class="status-table">
  <thead>
    <tr>
      <th>Name</th>
      <!-- <th>Description</th> -->
      <th>Development</th>
      <th>Production</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {% for solution in page.solutions %}
    <tr>
        <td>{{ solution.name }}</td>
        <!-- <td>{{ solution.description }}</td> -->
        <td>
            <a href="{{ solution.dev_docs }}" target="_blank" class="button">
                Documentation: Dev
            </a>
        </td>
        <td>
            <a href="{{ solution.prod_docs }}" target="_blank" class="button">
                Documentation: Prod
            </a>
        </td>
        <td >
                <a href="{{solution.dev_docs}}" target="_blank" class="tooltip">
                  <span class="tooltiptext">Development</span>
                  <health data="{{solution.dev_health}}">
                    <i class="fa fa-exclamation-triangle" aria-hidden="true" style="color:orange"></i>
                  </health>
                </a>
            |
                <a href="{{solution.prod_docs}}" target="_blank" class="tooltip">
                  <span class="tooltiptext">Production</span>
                  <health data="{{solution.prod_health}}">
                    <i class="fa fa-exclamation-triangle" aria-hidden="true" style="color:orange"></i>
                  </health>
                </a>
        </td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<style>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

@media (min-width: 700px) {
	.status-table {
		overflow-x: scroll;
	}
}

/* Tooltip text */
.tooltip .tooltiptext {
  margin: -5px 0px 0px 25px;
  visibility: hidden;
  width: 120px;
  background-color: #2c2f3b;
  color: #ebecf0;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>

 <script src="{{ 'assets/js/health.js' | relative_url }}">
  
</script>
