const { assert, expect } = require('chai')
let { Repository } = require("./solution.js");

describe("Test Repository Class", () => {

    it('creates valid object with correct parameter', () => {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let r = new Repository(properties)
        expect(typeof r).to.equal('object');
        expect(typeof r.props).to.equal('object');
        expect(typeof r.nextId).to.equal('function');
        expect(r.data instanceof Map).to.equal(true);
        expect(r.nextId()).to.equal(0);
        expect(r.count).to.equal(0);
        expect(r.props).to.eql(properties);
    });
    describe('getter count tests', () => {
        it('returns correct count with entries in map', () => {

            let properties = {
                name: "string",
            };

            let repository = new Repository(properties);

            let entity1 = {
                name: "Pesho",
            };

            let entity2 = {
                name: "Pesho",
            };

            repository.add(entity1)
            repository.add(entity2)
            expect(repository.count).to.equal(2);
        });
    });

    describe('add() tests', () => {
        it('returns correct id with correct entity', () => {
            // Initialize props object
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            let repository = new Repository(properties);


            // Add two entities
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };


            expect(repository.add(entity)).to.equal(0);
            expect(repository.add(entity2)).to.equal(1);
            expect(repository.count).to.deep.equal(2);
        });

        it('trows error with invalid entity (missing prop birthday)', () => {
            // Initialize props object
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            let repository = new Repository(properties);


            let invalidEntity = {
                name: "Pesho",
                age: 22,
            };


            let expectedResult = `Property birthday is missing from the entity!`
            expect(() => repository.add(invalidEntity)).to.throw(expectedResult)
        });

        it('trows error with invalid entity (missing prop name)', () => {
            // Initialize props object
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            let repository = new Repository(properties);

            let invalidEntity3 = {
                // name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let expectedResult = `Property name is missing from the entity!`
            expect(() => repository.add(invalidEntity3)).to.throw(expectedResult)
        });

        it('trows error with invalid entity (missing prop age)', () => {
            // Initialize props object
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            let repository = new Repository(properties);



            let invalidEntity3 = {
                name: "Pesho",
                // age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let expectedResult = `Property age is missing from the entity!`
            expect(() => repository.add(invalidEntity3)).to.throw(expectedResult)
        });

        it('trows eroor with invalid entity (prop age not correct type)', () => {
            // Initialize props object
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            let repository = new Repository(properties);



            let invalidEntity2 = {
                name: "Pesho",
                age: '22',
                birthday: new Date(1998, 0, 7)
            };
            let expectedResult = `Property age is not of correct type!`
            expect(() => repository.add(invalidEntity2)).to.throw(TypeError, expectedResult);
            expect(repository.count).to.equal(0);

        });

        it('trows eroor with invalid entity (prop birthday not correct type)', () => {

            // Initialize props object
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            let repository = new Repository(properties);


            // Add two entities

            let invalidEntity3 = {
                name: "Pesho",
                age: 22,
                birthday: 'a'
            };
            let expectedResult = `Property birthday is not of correct type!`
            expect(() => repository.add(invalidEntity3)).to.throw(TypeError, expectedResult);
            expect(repository.count).to.equal(0);

        });

        it('trows eroor with invalid entity (prop name not correct type)', () => {
            // Initialize props object
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            let repository = new Repository(properties);



            let invalidEntity3 = {
                name: 2,
                age: 22,
                birthday: new Date(1998, 0, 7),
            };
            let expectedResult = `Property name is not of correct type!`
            expect(() => repository.add(invalidEntity3)).to.throw(TypeError, expectedResult);
            expect(repository.count).to.equal(0);

        });
    });

    describe('getId() tests', () => {
        it('returns correct entity with correct id', () => {

            // Initialize props object
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            let repository = new Repository(properties);


            // Add two entities
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.add(entity)
            repository.add(entity2)
            expect(repository.getId(0)).to.equal(entity);
            expect(repository.getId(1)).to.equal(entity2);
        });

        it('trows error with incorrect id', () => {

            // Initialize props object
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            let repository = new Repository(properties);


            // Add two entities
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.add(entity)
            repository.add(entity2)

            let id = 3;
            let expectedResult = `Entity with id: ${id} does not exist!`
            expect(() => repository.getId(id)).to.throw(expectedResult);
        });

        it('trows error with incorrect id (-1)', () => {

            // Initialize props object
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            let repository = new Repository(properties);


            // Add two entities
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.add(entity)
            repository.add(entity2)

            let id = -1;
            let expectedResult = `Entity with id: ${id} does not exist!`
            expect(() => repository.getId(id)).to.throw(expectedResult);
        });
    });

    describe('update() tests', () => {
        it('updates the entity when correct id and correct new entities are given', () => {

            let properties = {
                name: "string",
            };

            let repository = new Repository(properties);

            let entity1 = {
                name: "Pesho",
            };

            let entity2 = {
                name: "Pesho",
            };

            let newEntity = {
                name: "NewName",
            };

            repository.add(entity1)
            repository.add(entity2)
            repository.update(0, newEntity)
            expect(repository.getId(0)).to.deep.equal(newEntity);
            expect(repository.getId(1)).to.equal(entity2);
            expect(repository.count).to.equal(2);
        });

        it('trows error with incorrect id (3)', () => {

            let properties = {
                name: "string",
            };

            let repository = new Repository(properties);

            let entity1 = {
                name: "Pesho",
            };

            let entity2 = {
                name: "Pesho",
            };

            let newEntity = {
                name: "NewName",
            };

            repository.add(entity1)
            repository.add(entity2)

            let id = 3;
            let expectedResult = `Entity with id: ${id} does not exist!`
            expect(() => repository.update(id, newEntity)).to.throw(expectedResult);
        });

        it('trows error with incorrect id (1)', () => {

            let properties = {
                name: "string",
            };

            let repository = new Repository(properties);

            let entity1 = {
                name: "Pesho",
            };

            let newEntity = {
                name: "NewName",
            };

            repository.add(entity1)

            let id = 1;
            let expectedResult = `Entity with id: ${id} does not exist!`
            expect(() => repository.update(id, newEntity)).to.throw(expectedResult);
        });

        it('trows error with incorrect newEntity', () => {

            let properties = {
                name: "string",
            };

            let repository = new Repository(properties);

            let entity1 = {
                name: "Pesho",
            };

            let entity2 = {
                name: "Pesho",
            };

            let newEntity = {
                age: "NewName",
            };

            repository.add(entity1)
            repository.add(entity2)

            let id = 0;
            let expectedResult = `Property name is missing from the entity!`
            expect(() => repository.update(id, newEntity)).to.throw(expectedResult);
        });

        it('trows error with incorrect newEntity property type', () => {

            let properties = {
                name: "string",
            };

            let repository = new Repository(properties);

            let entity1 = {
                name: "Pesho",
            };

            let entity2 = {
                name: "Pesho",
            };

            let newEntity = {
                name: 3,
            };

            repository.add(entity1)
            repository.add(entity2)

            let id = 0;
            let expectedResult = `Property name is not of correct type!`
            expect(() => repository.update(id, newEntity)).to.throw(expectedResult);
        });
    });

    describe('del() tests', () => {
        it('deletes the entity when correct id is given', () => {

            let properties = {
                name: "string",
            };

            let repository = new Repository(properties);

            let entity1 = {
                name: "Pesho",
            };

            let entity2 = {
                name: "Pesho",
            };

            repository.add(entity1)
            repository.add(entity2)
            repository.del(0)
            expect(repository.getId(1)).to.equal(entity2);
            expect(repository.data.has(0)).to.equal(false);
            expect(repository.data.get(0)).to.equal(undefined);
            expect(repository.count).to.equal(1);
            assert.deepEqual(repository.data.get(0), undefined);

        });


        it('deletes the entity when correct id (1) is given', () => {

            let properties = {
                name: "string",
            };

            let repository = new Repository(properties);

            let entity1 = {
                name: "Pesho",
            };

            let entity2 = {
                name: "Pesho",
            };

            repository.add(entity1)
            repository.add(entity2)
            repository.del(1)
            expect(repository.getId(0)).to.equal(entity1);
            expect(repository.data.has(1)).to.equal(false);
            expect(repository.data.get(1)).to.equal(undefined);
            expect(repository.count).to.equal(1);
            assert.deepEqual(repository.data.get(1), undefined);

        });

        it('trows error with incorrect id (3)', () => {

            let properties = {
                name: "string",
            };

            let repository = new Repository(properties);

            let entity1 = {
                name: "Pesho",
            };

            let entity2 = {
                name: "Pesho",
            };

            repository.add(entity1)
            repository.add(entity2)

            let id = 3;
            let expectedResult = `Entity with id: ${id} does not exist!`
            expect(() => repository.del(id)).to.throw(expectedResult);
            expect(repository.count).to.equal(2);

        });

    });
});
