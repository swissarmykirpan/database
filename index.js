/**
 * Sets up all the models and re-exports them with names.
 * @ignore
 */

// Must bind any models to knex database connection
const { Model } = require( 'objection' )
const Knex = require( 'knex' )
const config = require( './knexfile' )

// Initialise knex with connection to sqlite file
const knex = Knex( config )
// Bind it to Objection
Model.knex( knex )

// Import all the models
const Banis = require( './lib/models/Banis' )
const Lines = require( './lib/models/Lines' )
const LineTypes = require( './lib/models/LineTypes' )
const Raags = require( './lib/models/Raags' )
const Shabads = require( './lib/models/Shabads' )
const ShabadTypes = require( './lib/models/ShabadTypes' )
const Sources = require( './lib/models/Sources' )
const Writers = require( './lib/models/Writers' )

module.exports = {
  Banis,
  Lines,
  LineTypes,
  Raags,
  Shabads,
  ShabadTypes,
  Sources,
  Writers,
  knex,
}
